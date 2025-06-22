package com.app.product_crud.Exception;

public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(String message) {
      super(message);
    }
}
