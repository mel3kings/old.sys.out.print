FROM ubuntu
RUN apt-get update && apt-get install -y \
    curl \
    sudo \
    iputils-ping \
    nano \
    vim
RUN curl -o bootstrap-salt.sh -L https://bootstrap.saltstack.com
RUN chmod 777 bootstrap-salt.sh
RUN ./bootstrap-salt.sh -M
# master commands
RUN salt-key --list-all
RUN service salt-master start
RUN echo 'DONE'
CMD ["bash"]