# Use a Java 21 image
FROM eclipse-temurin:21-jdk-alpine

# Set work directory
WORKDIR /app

# Copy jar
COPY target/product-crud-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java","-jar","app.jar"]