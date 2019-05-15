GlideScriptableInputStream
--------------------------

A GlideScriptableInputStream object cannot be instantiated directly, but is used as an opaque object which is used to connect an input stream from GlideSysAttachment.getContentStream() with other streaming APIs, such as GlideTextReader, GlideDigest, and XMLDocument2.

See the scoped GlideSysAttachment API for methods that return a GlideScriptableInputStream object. The scoped GlideTextReader constructor requires a GlideScriptableInputStream object as an input parameter.