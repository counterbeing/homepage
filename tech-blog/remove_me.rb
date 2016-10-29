require 'pry'

module ErrorLogger
  class << self
    def log
      @log ||= []
    end

    def log_an_error(error)
      log << error
    end

    def print_log
       log
    end
  end
end

ErrorLogger.log_an_error('Whoops!')
puts ErrorLogger.print_log
