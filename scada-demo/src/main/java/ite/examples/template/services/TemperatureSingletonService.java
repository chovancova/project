package ite.examples.template.services;

import java.util.Random;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

@Singleton
@Startup
@ApplicationScoped
public class TemperatureSingletonService {
	
	private static final Logger logger = Logger.getLogger(TemperatureSingletonService.class.getName());
	private int currentTemperature;
	private Random randomGenerator;
	
	@Inject
	private EventDispatcher ed;
	
	@PostConstruct
	private void init() {
		logger.info("init ...");
		randomGenerator = new Random();
		currentTemperature = 0;
	}
	
	@Schedule(second = "*/3", minute="*", hour="*", persistent=false)
	public void scheduledAction() {
		currentTemperature = randomGenerator.nextInt(100);
		ed.fireMessageDataEvent(new EventMessage("temperatureData", Integer.toString(currentTemperature)));
	}
	
	
	public Integer getCurrentTemperature() {
		return currentTemperature;
	}
	
	@PreDestroy
	private void deinit() {
		logger.info("deinit ...");
	}
	
}
