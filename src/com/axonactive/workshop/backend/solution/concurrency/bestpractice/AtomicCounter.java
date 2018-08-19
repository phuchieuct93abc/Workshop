package com.axonactive.workshop.backend.solution.concurrency.bestpractice;

import java.util.concurrent.atomic.AtomicInteger;

public class AtomicCounter {
	private AtomicInteger count = new AtomicInteger();

	public AtomicInteger getCount() {
		return count;
	}

	public void setCount(AtomicInteger count) {
		this.count = count;
	} 
}
