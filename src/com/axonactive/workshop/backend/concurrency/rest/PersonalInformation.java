package com.axonactive.workshop.backend.concurrency.rest;

public class PersonalInformation {

	Person person;
	Address address;

	public Person getPerson() {
		return person;
	}

	public void setPerson(Person person) {
		this.person = person;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

}
