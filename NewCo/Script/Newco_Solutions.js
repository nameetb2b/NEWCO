function Newco_Solutions()
{
  //Clicks the 'BrowserWindow' object.
  Aliases.browser.BrowserWindow.Click(1302, 30);
  //Evaluates the visual fidelity of user interface.
  var testRun;
  testRun = VisualTest.CreateRun("Newco_Solutions");
  testRun.SetAllowedFails(0);
  testRun.Capture(Aliases.browser.pageHrSolutionsBuiltOnDataAnalyt, "solutiondemo", testRun.Fullpage, 0, true);
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.brightmine.com/uk/solutions/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
}