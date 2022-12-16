package com.san.test;

import com.san.utilities.APIClient;
import com.san.utilities.APIException;
import com.san.utilities.TestRailManager;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.io.IOException;

public class TestRailAutomation {
    private static final String TESTRAIL_USERNAME = "honey.gemini01@gmail.com";
    private static final String TESTRAIL_PASSWORD = "JEgFggadylolPF5TtNIH";
    private static final String RAILS_ENGINE_URL = "https://honeyraj09.testrail.io";
    private static final String PROFESSIONAL_ADS_SUITEID = "11";
    private static final String PROFESSIONAL_PROJECTID = "2";
    private static final String USERID  = "1";
    APIClient client = null;
    @BeforeMethod
    private APIClient setUpClient(){
        client = new APIClient(RAILS_ENGINE_URL);
        client.setUser(TESTRAIL_USERNAME);
        client.setPassword(TESTRAIL_PASSWORD);
        return client;
    }
    @Test
    //update the status of manual testcases
    public void updateTestCaseStatus() throws Throwable{
        String testCaseID = "2203";
        TestRailManager.addResultForTestCase(client,testCaseID, TestRailManager.TEST_CASE_PASSED_STATUS,"Pass:"+"https://mvnrepository.com/artifact/org.testng/testng/7.3.0");
        TestRailManager.getRESULT(client,testCaseID);
    }
    //get the detail of the testcase using testcase id
    @Test
    public void getTestCaseByID() throws IOException, APIException {
        TestRailManager.byID(client,"2203");
        String testCaseID = "2203";
        TestRailManager.getRESULT(client,testCaseID);
    }
    @Test
    //get the all testcases from a particular suite
    public void getAllTestCasesFromSuite() throws IOException,APIException{
        TestRailManager.bySUITE(client,PROFESSIONAL_PROJECTID,PROFESSIONAL_ADS_SUITEID);

    }
    @Test
    //get the all testcases of a user
    public void getAllTestCasesFromUser()throws IOException,APIException{
        TestRailManager.byUSER(client,PROFESSIONAL_PROJECTID,PROFESSIONAL_ADS_SUITEID,USERID);
    }

    @Test
    public void  byUserId1()throws IOException,APIException{
        TestRailManager.byUserId(client,USERID);
    }

}
