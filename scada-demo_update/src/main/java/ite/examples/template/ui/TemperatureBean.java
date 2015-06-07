package ite.examples.template.ui;

import java.io.Serializable;
import java.util.logging.Logger;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

@SessionScoped
@Named("tempBean")
public class TemperatureBean implements Serializable {

	private static final Logger logger = Logger.getLogger(TemperatureBean.class.getName());
	
	@PostConstruct
	private void init() {
		logger.info("init ...");
	}

	@PreDestroy
	private void deinit() {
		logger.info("deinit ...");
	}
	
}
