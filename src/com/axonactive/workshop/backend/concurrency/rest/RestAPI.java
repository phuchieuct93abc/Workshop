package com.axonactive.workshop.backend.concurrency.rest;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

@Path("getPersons")
public class RestAPI {

	private List<Person> persons = new ArrayList<>();

	public RestAPI() {
		addNewPerson(0, "Tin", "Dep Trai");
		addNewPerson(1, "Steave", "Job");
	}

	private Person addNewPerson(int id, String firstname, String lastname) {
		Person person = new Person();
		person.setFirstname(firstname);
		person.setLastname(lastname);
		person.setId(id);
		persons.add(person);
		return person;
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Person> getPersons() throws InterruptedException {
		Thread.sleep(2000);
		return persons;
	}

	@GET
	@Path("/{personId}")
	@Produces({ MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML })
	public Response getPerson(@PathParam("personId") int personId) throws InterruptedException {
		Thread.sleep(2000);
		try {
			return Response.status(Status.OK).entity(persons.get(personId)).build();

		} catch (IndexOutOfBoundsException ex) {
			return Response.status(Status.NOT_FOUND).entity(new Person()).build();
		}
	}
}
