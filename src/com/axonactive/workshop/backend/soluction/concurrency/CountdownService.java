package com.axonactive.workshop.backend.soluction.concurrency;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;

public class CountdownService {
	private static Map<String,CountDownLatch> map;
	static {
		map = new HashMap<>();
	}
	
	public static String put(int number) {
		String id = UUID.randomUUID().toString();
		map.put(id, new CountDownLatch(number));
		return id;
	}
	
	public static CountDownLatch get(String id) {
		return map.get(id);
	}
	
	public static void remove (String id) {
		map.remove(id);
	}

}
