function BasicUsage()
{
  pageObject = Sys.Browser("chrome").Page("https://www.brightmine.com/uk/solutions/");
  let testRun = VisualTest.CreateRun("Basic usage test run");
  testRun.Capture(pageObject, "full screen capture", testRun.Fullpage);
  testRun.Capture(pageObject, "view port", testRun.Viewport);
  //elementObject = pageObject.FindElement("#header");
  //testRun.Capture(elementObject, "element capture", testRun.Element);
}