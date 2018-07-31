package com.axonactive.workshop.backend.concurrency;

import ch.ivyteam.ivy.environment.Ivy;

public class MemoryConsistencyErrorExample {
	private static volatile boolean sayHello = false;

    public static void main(String[] args) throws InterruptedException {

        Thread thread = new Thread(() -> {
           while(!sayHello) {}
           Ivy.log().fatal("Say Hello inside Thread!");
        });

        thread.start();

        Thread.sleep(1000);
        Ivy.log().fatal("Say Hello..");
        sayHello = true;

        Thread.sleep(1000);
        Ivy.log().fatal("Say Bye..");
        sayHello = false;
    }
}
