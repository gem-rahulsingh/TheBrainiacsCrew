package com.san.utilities;

import com.jayway.jsonpath.JsonPath;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class TestRailManager {
    public static String TEST_RUN_ID = "32";
    public static final int TEST_CASE_PASSED_STATUS = 1;
    public static final int TEST_CASE_FAILED_STATUS = 5;
    public static void addResultForTestCase (APIClient client, String testCaseId, int status,String error)throws IOException, APIException
    {
        String testRunId = TEST_RUN_ID;
        Map<String,Comparable> data = new HashMap<String, Comparable>();
        data.put("status_id",status);
        data.put("comment","Test Executed - status updated automatically from selenium test automation."+error);
        client.sendPost("add_result_for_case/"+ testRunId +"/" +testCaseId + "", data);

    }
    public static void getRESULT(APIClient client,String testCaseId) throws IOException, APIException{
        Object object =client.sendGet("get_results_for_case/" + TEST_RUN_ID + "/" +testCaseId);
        System.out.println(object.toString());

        Integer json = JsonPath.parse(object.toString()).read("results[0].status_id");
        System.out.println(json.toString());
        if(json.toString().equals("1"))
        {
            System.out.print("Pass");
        }
        else if(json.toString().equals("5")) {
            System.out.print("Fail");
        }




    }

    public static void bySUITE(APIClient client,String projectID,String suiteID) throws IOException, APIException {
        Object object =client.sendGet("get_cases/" + projectID + "&suite_id=" + suiteID);
        System.out.println(object.toString());
    }
    public static void byID(APIClient client,String testCaseId) throws IOException, APIException {
        Object object =client.sendGet("get_case/" + testCaseId);
        System.out.println(object.toString());
    }
    public static void byUSER(APIClient client,String projectID,String suiteID,String userID) throws IOException, APIException {
        System.out.print("get_cases/" + projectID + "&suite_id=" + suiteID + "&created_by=" + userID);
        Object object =client.sendGet("get_cases/" + projectID + "&suite_id=" + suiteID + "&created_by=" + userID);
        System.out.println(object.toString());
    }
    public static void byUserId(APIClient client,String userID) throws IOException, APIException {
        Object object =client.sendGet("get_projects/");
        System.out.println(object.toString());
        int[] projectid=new int[3];
        for(int i=0;i<3;i++)
        {
            Integer json = JsonPath.parse(object.toString()).read("projects["+i+"].id");
            int st1=json;
            projectid[i]=st1;
            // String str=json.toString();
            // System.out.println(json.toString());
            //  System.out.print(st1);

        }


    }
}
