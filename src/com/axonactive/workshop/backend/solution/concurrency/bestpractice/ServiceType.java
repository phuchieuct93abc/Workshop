package com.axonactive.workshop.backend.solution.concurrency.bestpractice;

import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

import com.axonactive.workshop.backend.section.ParseJsonService;

public enum ServiceType {
	
	NORMAL_SERVICE ("normal", "Normal Service") {
		@Override
		public int getTotalAge(String file, int age) {
			return new ParseJsonService().count(file, age);
		}
	},
	BARRIER_SERVICE ("barrier","Barrier Service") {
		@Override
		public int getTotalAge(String file, int age) {
			return new BarrierParserJsonService().count(file, age);
		}
	},
	COUNTDOWN_SERVICE("countdown", "CountDown Service") {
		@Override
		public int getTotalAge(String file, int age) {
			return new CountDownLatchParserJsonService().count(file, age);
		}
	};
	
	
	private String id ;
	private String description;
	
	ServiceType(String id, String description) {
		this.id = id;
		this.setDescription(description);
	}
	
	public abstract int getTotalAge(String file, int age);
	
	public static ServiceType getService (String id) {
		Optional<ServiceType> service = Arrays.asList(ServiceType.values()).stream().filter(item -> item.getId().equals(id)).findFirst();
		return Objects.nonNull(service) ? service.get() : null;
 	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
