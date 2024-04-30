function Newco_HomePage()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.brightmine.com/uk/");
  //Evaluates the visual fidelity of user interface.
  var testRun, testRun1, testRun2, testRun3, testRun4, testRun5, testRun6, testRun7, testRun8, testRun9, testRun10;
  testRun = VisualTest.CreateRun("Newco_HomePage");
  testRun.SetAllowedFails(0);
  testRun.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "HomePage", testRun.Fullpage, 0, false);
  //Evaluates the visual fidelity of user interface.
  testRun1 = VisualTest.CreateRun("Newco_HomePage");
  testRun1.SetAllowedFails(0);
  testRun1.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner1", testRun1.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun2 = VisualTest.CreateRun("Newco_HomePage");
  testRun2.SetAllowedFails(0);
  testRun2.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner2", testRun2.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun3 = VisualTest.CreateRun("Newco_HomePage");
  testRun3.SetAllowedFails(0);
  testRun3.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner3", testRun3.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun4 = VisualTest.CreateRun("Newco_HomePage");
  testRun4.SetAllowedFails(0);
  testRun4.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner5", testRun4.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun5 = VisualTest.CreateRun("Newco_HomePage");
  testRun5.SetAllowedFails(0);
  testRun5.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner6", testRun5.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun6 = VisualTest.CreateRun("Newco_HomePage");
  testRun6.SetAllowedFails(0);
  testRun6.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner7", testRun6.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun7 = VisualTest.CreateRun("Newco_HomePage");
  testRun7.SetAllowedFails(0);
  testRun7.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner8", testRun7.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun8 = VisualTest.CreateRun("Newco_HomePage");
  testRun8.SetAllowedFails(0);
  testRun8.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner9", testRun8.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun9 = VisualTest.CreateRun("Newco_HomePage");
  testRun9.SetAllowedFails(0);
  testRun9.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "banner10", testRun9.Fullpage, 0, true);
  //Evaluates the visual fidelity of user interface.
  testRun10 = VisualTest.CreateRun("Newco_HomePage");
  testRun10.SetAllowedFails(0);
  testRun10.Capture(Aliases.browser.pageHrLeadersBrighterBusinessOut, "Banner11", testRun10.Fullpage, 0, true);
  //Maximizes the specified Window object.
  Sys.Browser().BrowserWindow(0).Maximize();
}