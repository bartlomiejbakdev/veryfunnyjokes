package com.bartlomiejbakcodes.httpserver.filereader;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

public class Json {

    private static ObjectMapper myObjMapper = defaultObjMapper();

    private static ObjectMapper defaultObjMapper() {
        ObjectMapper objectMapper =  new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return objectMapper;
    }

    public static JsonNode parse(String jsonSrc) throws IOException {
        return myObjMapper.readTree(jsonSrc);
    }

    public static <A> A fromJson(JsonNode jn,  Class<A> clazz) throws JsonProcessingException {
        return myObjMapper.treeToValue(jn, clazz);
    }

}
