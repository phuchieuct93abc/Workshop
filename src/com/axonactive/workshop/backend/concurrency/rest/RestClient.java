package com.axonactive.workshop.backend.concurrency.rest;

import org.apache.commons.lang3.StringUtils;

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
	
	public Person getPersonById(String id) {
		if (StringUtils.isEmpty(id)) {
			return new Person();
		}
		
		return Ivy.rest().client("restService")
						.path("person")
						.path(String.valueOf(id))
						.request()
						.get(Person.class);
	}
	
	public Address getAddressById(String id) {
		if (StringUtils.isEmpty(id)) {
			return new Address();
		}
		
		return Ivy.rest().client("restService")
						.path("address")
						.path(String.valueOf(id))
						.request()
						.get(Address.class);
	}

}
