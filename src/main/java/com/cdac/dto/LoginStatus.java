package com.cdac.dto;

public class LoginStatus {
	private boolean status;
	private String statusMessage;
	private int Id;
	
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getStatusMessage() {
		return statusMessage;
	}
	public void setStatusMessage(String statusMeassage) {
		this.statusMessage = statusMeassage;
	}
}