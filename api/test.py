import pytest
import requests
import time 

def test_valid_domain_email_pwd():
    url = "emNjcWlrYWl5Mg=="
    user = "cWlrYWl5MkBnbWFpbC5jb20="
    pwd = "UUlrYWk5ODAyMjE="
    
    response = requests.get("http://127.0.0.1:5000/get_all_tickets/" + url + "/" + user + "/" + pwd)
    data = response.json()
    time.sleep(1)

    assert response.status_code == 200
    assert len(data["content"]["tickets"]) == 100

def test_valid_domain_email_wrong_pwd():
    url = "emNjcWlrYWl5Mg=="
    user = "cWlrYWl5MkBnbWFpbC5jb20="
    pwd = "d3Jvbmc="
    
    response = requests.get("http://127.0.0.1:5000/get_all_tickets/" + url + "/" + user + "/" + pwd)
    time.sleep(1)
    data = response.json()
    assert data["stat"] == 401

def test_invalid_domain():
    url = "ZGZpdWhrYWJ2ZHVrZWZoaWFidmFkdWtoZnY="
    user = "cWlrYWl5MkBnbWFpbC5jb20="
    pwd = "d3Jvbmc="
    
    response = requests.get("http://127.0.0.1:5000/get_all_tickets/" + url + "/" + user + "/" + pwd)
    time.sleep(1)
    data = response.json()
    assert data["stat"] == 404

test_invalid_domain()