package com.axonactive.workshop.backend.concurrency;

class Counter {
    private int count;

    public void increment() {
        count = count + 1;
    }

    public int getCount() {
        return count;
    }
}
