package ite.examples.template.ui.push;

import ite.examples.template.services.EventMessage;

import java.io.StringReader;
import java.io.StringWriter;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.json.JsonWriter;

import org.primefaces.json.JSONException;
import org.primefaces.json.JSONObject;
import org.primefaces.json.JSONArray;

public class DataUtils {
	
	private static final String eventTypeJS = "eventType";
	private static final String dataJS = "data";
	
	public static String jsonEncodePF(EventMessage message) throws JSONException {
		JSONObject jsonObj = new JSONObject();
		jsonObj.put(eventTypeJS, message.getEventType());
		jsonObj.put(dataJS, message.getData());
        return jsonObj.toString();
	}

	public static EventMessage jsonDecodePF(String jsonString) throws JSONException {
		JSONObject jsonObj = new JSONObject(jsonString);
		String eventType = jsonObj.getString(eventTypeJS);
		String data = jsonObj.getString(dataJS);
		return new EventMessage(eventType, data);
	}

	public static String jsonEncode(EventMessage message) {
		StringWriter writer = new StringWriter();
		JsonObjectBuilder jsonBuilder = Json.createObjectBuilder();
		jsonBuilder.add(eventTypeJS, message.getEventType());
		jsonBuilder.add(dataJS, message.getData());
		JsonWriter jsonWriter = Json.createWriter(writer);
		jsonWriter.writeObject(jsonBuilder.build());
		return writer.toString();
	}

	public static EventMessage jsonDecode(String jsonString) {
		JsonReader jsonReader = Json.createReader(new StringReader(jsonString));
		JsonObject jsonObject = jsonReader.readObject();
		String eventType = jsonObject.getString(eventTypeJS);
		String data = jsonObject.getString(dataJS);
		return new EventMessage(eventType, data);		
	}

	public static void main(String[] args) throws JSONException {
		EventMessage em = new EventMessage("xxx", "zz");
		String emJsonString = jsonEncodePF(em);
		System.out.println("ENCODED: " + emJsonString);
		EventMessage emDec = jsonDecodePF(emJsonString);
		String emDecoded = jsonEncodePF(emDec);
		System.out.println("DECODED: " + emDecoded);
		
	}
	
}
