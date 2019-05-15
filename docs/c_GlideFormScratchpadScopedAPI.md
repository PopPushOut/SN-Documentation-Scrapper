GlideFormScratchpad
-------------------

The scoped GlideFormScratchpad class implements the g\_scratchpad object for scoped applications.

The scoped GlideFormScratchpad class has no constructor and no methods. The g\_scratchpad object behaves identically for global and scoped applications.  
  
The g\_scratchpad object provides a mechanism for passing information from the server to the client when the client requires information not available on a form. This can be accomplished by creating a business rule to put the information in the g\_scratchpad object and accessing the information in a client script.