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
public class PumpingStationSingletonService {
	
	private static final Logger logger = Logger.getLogger(PumpingStationSingletonService.class.getName());

	private int 		hodnotaNadrze;
	private Random randomGenerator;
	
	@Inject
	private EventDispatcher ed;
	
	@PostConstruct
	private void init() {
		logger.info("init ...");
		randomGenerator = new Random();
				hodnotaNadrze = 0;
		
	}
	
	@Schedule(second = "*/3", minute="*", hour="*", persistent=false)
	public void scheduledAction() {
		hodnotaNadrze = randomGenerator.nextInt(100);
		ed.fireMessageDataEvent(new EventMessage("hodnotaNadrze", Integer.toString(hodnotaNadrze)));
		
	}
	
	public Integer getHladinaNadrze() {
		return 		hodnotaNadrze;
	}
	
	
	@PreDestroy
	private void deinit() {
		logger.info("deinit ...");
	}
	
}
