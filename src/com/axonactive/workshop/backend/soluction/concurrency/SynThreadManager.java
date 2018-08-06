package com.axonactive.workshop.backend.soluction.concurrency;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.SynchronousQueue;

public final class SynThreadManager {

	private SynThreadManager() {}

	private static Map<String, SynchronousQueue<? extends Object>> asynMap;

	static {
		asynMap = new HashMap<>();
	}

	public static synchronized String produceQueue() {
		String id = UUID.randomUUID().toString();
		asynMap.put(id, new SynchronousQueue<>());
		return id;
	}

	public static synchronized SynchronousQueue<? extends Object> getQueue(String id) {
		SynchronousQueue<? extends Object> synchronousQueue = asynMap.get(id);
		if (Objects.nonNull(synchronousQueue)) {
			return synchronousQueue;
		}
		return new SynchronousQueue<>();
	}

	public static synchronized void removeQueue(String id) {
		asynMap.remove(id);
	}

}
