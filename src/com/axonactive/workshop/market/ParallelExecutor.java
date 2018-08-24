package com.axonactive.workshop.market;

import java.util.Collections;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.function.Function;

import org.apache.commons.lang3.StringUtils;

import ch.ivyteam.ivy.application.IProcessModelVersion;
import ch.ivyteam.ivy.environment.Ivy;
import ch.ivyteam.ivy.request.RequestFactory;
import ch.ivyteam.ivy.request.metadata.MetaData;
import ch.ivyteam.ivy.security.SecurityManagerFactory;
import ch.ivyteam.ivy.workflow.ITask;
import ch.ivyteam.ivy.workflow.IWorkflowSession;

public abstract class ParallelExecutor<I, O> {
	protected ExecutorService executorService;
	
	public ParallelExecutor() {
		executorService = createExecutor();
	}
	
	public abstract ExecutorService createExecutor();

	/**
	 * Parallel execute method with Callable executor service
	 * @param function
	 * @param arguments
	 * @return future object
	 */
	public Future<O> callWithSecurity(Function<I, O> function, I arguments) {
		IProcessModelVersion pmv = Ivy.request().getProcessModelVersion();
		ITask currentTask = Ivy.wfTask();
		IWorkflowSession session = Ivy.session();

		return executorService.submit(new Callable<O>() {
			@Override
			public O call() throws Exception {
				return SecurityManagerFactory.getSecurityManager().executeAsSystem(new Callable<O>() {
					@Override
					public O call() throws Exception {
						MetaData.pushRequest(RequestFactory.createRootProcessRequest(
								pmv,
								StringUtils.EMPTY,
								Collections.<String, Object> emptyMap(),
								currentTask,
								session
						));
						try {
							return function.apply(arguments);
						} finally {
							MetaData.popRequest();
						}
					}
				});
			}
		});
	}
	
	/**
	 * Parallel execute method with Runnable executor service
	 * @param function
	 * @param arguments
	 * @return future object
	 */
	public void runWithSecurity(Runnable runnable) {
		IProcessModelVersion pmv = Ivy.request().getProcessModelVersion();
		ITask currentTask = Ivy.wfTask();
		IWorkflowSession session = Ivy.session();

		executorService.execute(() -> {
			try {
				SecurityManagerFactory.getSecurityManager().executeAsSystem(() -> {
					MetaData.pushRequest(RequestFactory.createRootProcessRequest(
							pmv,
							StringUtils.EMPTY,
							Collections.<String, Object> emptyMap(),
							currentTask,
							session
					));
					try {
						runnable.run();
					} finally {
						MetaData.popRequest();
					}
				    return true;
				});
			} catch (Exception e) {
				Ivy.log().error("Runnable task with security has errors.", e);
			}
		});
	}
}
