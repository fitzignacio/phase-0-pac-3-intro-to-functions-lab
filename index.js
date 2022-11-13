shout(string)
       receives one argument and returns it in all caps:
     ReferenceError: shout is not defined
 (test/index-test.js:4:5)
      at processImmediate (internal/timers.js:461:21)

      describe("shout(string)", function () {
        it("receives one argument and returns it in all caps", function () {
          expect(shout("hello")).toEqual("HELLO");
        });
      });

      function shout(string) {
        // todo
      }
      
      hout(string)
       receives one argument and returns it in all caps:
     Error: Expected undefined to equal 'HELLO'
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
 (test/index-test.js:4:28)
      at processImmediate (internal/timers.js:461:21)

      function shout(string) {
        return string;
      }
      "Hello!".toUpperCase(); // 'HELLO!'
      function shout(string) {
        return string.toUpperCase();
      }
      shout(string)
      ✓ receives one argument and returns it in all caps
  
    whisper(string)
      1) receives one argument and returns it in all lowercase
  
    1 passing (147ms)
    1 failing
  
    1) whisper(string)
         receives one argument and returns it in all lowercase:
       ReferenceError: whisper is not defined
   (test/index-test.js:10:5)
        at processImmediate (internal/timers.js:461:21)

        whisper(string)
       receives one argument and returns it in all lowercase:
     ReferenceError: whisper is not defined
 (test/index-test.js:10:5)
      at processImmediate (internal/timers.js:456:21)
      function add() {
        // we'll fill this in shortly
        basic math functions
       'add()' is a valid function:
     ReferenceError: add is not defined
 (test/index-test.js:10:12)
      at processImmediate (node:internal/timers:464:21)
      function add() {
        // we'll fill this in shortly
      }