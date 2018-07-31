package com.axonactive.workshop.backend.concurrency;

import ch.ivyteam.ivy.environment.Ivy;

public class DeadLockExample {
	String workShop = "WorkShop's ";
    String awsome = "awsome";
     
    private Thread thread1 = new Thread("Thread 1"){
    	@Override
        public void run(){
            synchronized(workShop){
            	try {
            		Ivy.log().fatal("Thread 1 sleeps 1s");
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					Ivy.log().fatal(e.getMessage(), e);
				}
                synchronized(awsome){
                	Ivy.log().fatal(workShop + awsome);
                }
            }
        }
    };
     
    private Thread thread2 = new Thread("Thread 2"){
    	@Override
        public void run(){
            synchronized(awsome){
            	try {
            		Ivy.log().fatal("Thread 2 sleeps 1s");
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					Ivy.log().fatal(e.getMessage(), e);
				}
                synchronized(workShop){
                	Ivy.log().fatal(awsome + workShop);
                }
            }
        }
    };
     
    public static void main(String a[]){
    	DeadLockExample instance = new DeadLockExample();
    	instance.thread1.start();
    	instance.thread2.start();
    }
}
