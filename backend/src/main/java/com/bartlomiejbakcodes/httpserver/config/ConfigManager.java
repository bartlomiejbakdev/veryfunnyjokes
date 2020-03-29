package com.bartlomiejbakcodes.httpserver.config;

import com.bartlomiejbakcodes.httpserver.filereader.Json;
import com.bartlomiejbakcodes.httpserver.filereader.ReadFile;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;

import java.io.IOException;

public class ConfigManager {

    public static ConfigManager myConfigManager;
    public static Config myCurrentConfig;

    public static ConfigManager getInstance() {
        if (myConfigManager == null) {
            myConfigManager = new ConfigManager();
        }
        return myConfigManager;
    }

    public void loadConfig(String filePath) {

        ReadFile readFile = new ReadFile();
        String value = null;
        try {
            value = readFile.loadConfiguration(filePath);
        } catch (IOException e) {
            throw new ConfigException(e);
        }
        JsonNode conf = null;
        try {
            conf = Json.parse(value);
        } catch (IOException e) {
            throw new ConfigException("Error parsing Configuration File 1", e);
        }
        try {
            myCurrentConfig = Json.fromJson(conf, Config.class);
        } catch (JsonProcessingException e) {
            throw new ConfigException("Error parsing Configuration File 2", e);
        }
    }

    public Config getCurrentConfig() {
        if (myCurrentConfig == null) {
            throw new ConfigException("No Current Config Set");
        }
        return myCurrentConfig;
    }

}
