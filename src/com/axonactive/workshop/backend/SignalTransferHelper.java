package com.axonactive.workshop.backend;

import java.io.IOException;
import java.util.Objects;

import org.apache.commons.lang3.StringUtils;

import ch.ivyteam.ivy.environment.Ivy;
import ch.ivyteam.ivy.process.model.value.SignalCode;

import com.fasterxml.jackson.databind.ObjectMapper;

public class SignalTransferHelper {
	
	public static SignalTransferHelper createInstance(){
		return new SignalTransferHelper();
	}
	
	public void send(SignalCode signalCode, Object signalData){
		if(Objects.nonNull(signalCode)){			
			String signalDataInJson = toJson(signalData);
			Ivy.wf().signals().send(signalCode,signalDataInJson);
		}
	}
	
	public String toJson(Object data) {
		
		if(Objects.nonNull(data)) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				return mapper.writeValueAsString(data);
			} catch (IOException e) {
				Ivy.log().error("Failed to convert to Json", e);
			}
		} else {
			throw new IllegalArgumentException("Please provide the correct SignalData oject");
		}
		
		return StringUtils.EMPTY;
	}
	
	public <T> T toSignalData(String signalDataAsJson, Class<T> type) {
		
		ObjectMapper mapper = new ObjectMapper();
		
		try {
			return mapper.readValue(signalDataAsJson, type);
		} catch (IOException e) {
			Ivy.log().error("Failed to get Object from json", e);
		}
		return null;
	}
}
