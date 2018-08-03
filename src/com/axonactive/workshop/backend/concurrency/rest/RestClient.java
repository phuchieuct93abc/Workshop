package com.axonactive.workshop.backend.concurrency.rest;

import ch.ivyteam.ivy.environment.Ivy;

public class RestClient {

	private static volatile RestClient instance;

	private RestClient() {
	}

	public static RestClient getInstance() {
		if (instance == null) {
			synchronized (RestClient.class) {
				if (instance == null)
					instance = new RestClient();
			}
		}
		return instance;
	}
	
	public Person getPersonById(int id) {
		return Ivy.rest().client("restService")
						.path(String.valueOf(id))
						.request()
						.get(Person.class);
	}

}
