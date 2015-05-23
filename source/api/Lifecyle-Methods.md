### created

Called synchronously after the instance is created. At this stage, the instance has finished processing the options which means the following have been set up: data observation, computed properties, methods, watch/event callbacks. However, DOM compilation has not been started, and the $el property will not be available yet.

### ready

Called after both `$data` and `$el` is ready.

### destroy

Called before the viewModel instance be destroyed.