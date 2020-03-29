package com.bartlomiejbakcodes.httpserver;

import com.bartlomiejbakcodes.httpserver.config.Config;
import com.bartlomiejbakcodes.httpserver.config.ConfigManager;
import com.bartlomiejbakcodes.httpserver.core.ServerListenerThread;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

public class HttpServer {

    private final static Logger LOGGER = LoggerFactory.getLogger(HttpServer.class);

    public static void main(String[] args) {
        LOGGER.info("Server starting...");

        ConfigManager.getInstance().loadConfig("src/main/resources/config.json");
        Config conf = ConfigManager.getInstance().getCurrentConfig();
        LOGGER.info("Port: " + conf.getPort());
        LOGGER.info("WebRoot: " + conf.getWebRoot());

        try {
            ServerListenerThread serverListenerThread = new ServerListenerThread(conf.getPort(), conf.getWebRoot());
            serverListenerThread.start();
        } catch (IOException e) {
            e.printStackTrace();
        }


    }
}
