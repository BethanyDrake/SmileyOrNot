
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.stream.Collectors;

public class SmileService {

    public static void main(String[] args) throws IOException {


        InetSocketAddress address = new InetSocketAddress("10.242.125.31",9998);
        HttpServer server = HttpServer.create(address, 0);

        server.createContext("/server", new MyHandler());
        server.createContext("/", new MyHandler2());
        server.setExecutor(null); // creates a default executor

        server.start();

        System.out.println("host name: " + address);



        displayServerInfo(server);
    }

    private static void displayServerInfo(HttpServer server) throws IOException {
        System.out.println("Server running");
        System.out.println("Visit: http://10.242.125.31:9998/server");
        System.out.println("Hit return to stop...");
        System.in.read();
        System.out.println("Stopping server");
        server.stop(0);
        System.out.println("Server stopped");
    }


    static String smileys = ":)\n";

    public static String read(InputStream input) throws IOException {
        try (BufferedReader buffer = new BufferedReader(new InputStreamReader(input))) {
            return buffer.lines().collect(Collectors.joining("\n"));
        }

    }

    static class MyHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            addHeaders(t);
            switch (t.getRequestMethod())
            {
                case "GET":

                    handleGet(t);
                    break;

                case "POST":

                    handlePut(t);
                    break;
                default:
                    System.out.println("no matches for " + t.getRequestMethod());
                    return;

            }


        }

        private void addHeaders(HttpExchange t) {
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Origin", "*");
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Credentials", "true");
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Headers",
                    "origin, content-type, accept, authorization");
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Methods",
                    "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        }

        private void handlePut(HttpExchange t) throws IOException {
            String body = read(t.getRequestBody());
            System.out.println("putting: " + body);
            appendMessage(body);
            sendResponse(t, smileys);
        }

        private void appendMessage(String body) {
            smileys = body + "," + smileys;
        }

        private void handleGet(HttpExchange t) throws IOException {

            sendResponse(t, smileys);

        }

        private void sendResponse(HttpExchange t, String response) throws IOException {
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }



    static class MyHandler2 implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            addHeaders(t);
            sendResponse(t);

        }

        private void addHeaders(HttpExchange t) {
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Origin", "*");
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Credentials", "true");
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Headers",
                    "origin, content-type, accept, authorization");
            t.getResponseHeaders().add(
                    "Access-Control-Allow-Methods",
                    "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        }


        static String readFile(String path, Charset encoding)
                throws IOException
        {
            byte[] encoded = Files.readAllBytes(Paths.get(path));
            return new String(encoded, encoding);
        }
        private void sendResponse(HttpExchange t) throws IOException {
            String response = readFile("/Users/bethany/Desktop/SmileyOrNot/SmileyOrNot/SmileyOrBack/out/production/SmileyOrNot2/index.html", Charset.defaultCharset());
            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
