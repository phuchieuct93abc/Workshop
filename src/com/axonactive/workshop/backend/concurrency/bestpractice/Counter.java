package com.axonactive.workshop.backend.concurrency.bestpractice;

public class Counter {
	private int count;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
	public synchronized void increase() {
		this.count++;
	}
}
