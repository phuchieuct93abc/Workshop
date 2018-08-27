package com.axonactive.workshop.backend.rest;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@XmlRootElement(name = "person")
public class Person {
	private java.lang.String id;
	private java.lang.String firstname;
	private java.lang.String lastname;

	@XmlElement
	public java.lang.String getId() {
		return id;
	}

	public void setId(java.lang.String id) {
		this.id = id;
	}

	@XmlElement
	public java.lang.String getFirstname() {
		return firstname;
	}

	public void setFirstname(java.lang.String firstname) {
		this.firstname = firstname;
	}

	@XmlElement
	public java.lang.String getLastname() {
		return lastname;
	}

	public void setLastname(java.lang.String lastname) {
		this.lastname = lastname;
	}
	
	@Override
	public String toString() {
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.writeValueAsString(this);
		} catch (JsonProcessingException e) {
			return "ERROR";
		}
	}
	

}
