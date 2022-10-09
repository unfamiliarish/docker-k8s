# Docker and Kubernetes: The Complete Guide 
### by Stephen Grider

File structure corresponds to the course structure.

Each section with a code-along has its own a directory. 

## Index 
* Section 3: Building Custom Images Through Docker Server
    * `s3_redis_image`
    * Introduces process of creating a Dockerfile: base image, any changes to the image, setting the startup command.
* Section 4: Making Real Projects with Docker
    * `s4_simpleweb`
    * Creates a containerized node app that simply displays the message "Hi there". Shows creating a container that has ports mapped to localhost ports:
      ```
      # build and run app
      docker build -t gchwalik/simpleweb .
      docker run -p 8080:8080 gchwalik/simpleweb

      # debug
      docker run -it gchwalik/simpleweb sh
      ```