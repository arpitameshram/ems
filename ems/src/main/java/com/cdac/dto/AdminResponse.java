package com.cdac.dto;

public class AdminResponse {
	
	private String message;

	public AdminResponse(String message) {
		this.message=message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}

