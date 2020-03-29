package com.bartlomiejbakcodes.httpserver.filereader;

import java.io.FileReader;
import java.io.IOException;

public class ReadFile {

    public String loadConfiguration (String filePath) throws IOException {

        FileReader fileReader = new FileReader(filePath);
        StringBuffer sb = new StringBuffer();
        int i;
        while ((i = fileReader.read()) != -1){
            sb.append((char)i);
        }
        return sb.toString();
    }
}
