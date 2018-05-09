
import com.sun.jersey.spi.container.ContainerResponseFilter;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import com.sun.jersey.api.container.httpserver.HttpServerFactory;

import java.io.*;
import java.net.InetSocketAddress;
import java.util.stream.Collectors;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.ext.Provider;

// The Java class will be hosted at the URI path "/helloworld"
@Path("/helloworld")
public class SmileService {
    // The Java method will process HTTP GET requests
    @GET
    // The Java method will produce content identified by the MIME Media type "text/plain"
    @Produces("text/html")
    public static String getHTML() {
        return "<html lang=\"en\"><body><h1>Hello, World!!</body></h1></html>";
    }

    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(new InetSocketAddress(9998), 0);
        server.createContext("/test", new MyHandler());



        server.setExecutor(null); // creates a default executor



        server.start();

        System.out.println("Server running");
        System.out.println("Visit: http://localhost:9998/helloworld");
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
            smileys = "<p>" + body + "</p>" + "\n" + smileys;
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
}
