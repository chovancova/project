package ite.examples.template.services;

/**
 * DTO used to transport event data event consumers.
 * @author jveverka
 *
 */
public class EventMessage {

	private String eventType;
	private String data;
	
	public EventMessage() {
	}
	
	/**
	 * Create an instance of EventMessage 
	 * @param type - type of the message
	 * @param description - description, may be text or JSON formated data for consumption in JavaScript runtime
	 */
	public EventMessage(String eventType, String data) {
		super();
		this.eventType = eventType;
		this.data = data;
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

}
