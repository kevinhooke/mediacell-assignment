import pytest
from index import app as api

@pytest.fixture()
def client():
    return api.test_client()

def test_get_all(client):
    response = client.get("/actions")
    assert response.status_code == 200
    assert b'{"actions":[{"codeword":5001,"id":"alert"},{"codeword":5002,"id":"thanks"}]}' in response.data

def test_get_by_codeword(client):
    response = client.get("/actions/codeword/5001")
    assert response.status_code == 200
    assert b'{"codeword":5001,"id":"alert"}' in response.data

def test_get_by_codeword_notfound(client):
    response = client.get("/actions/codeword/123")
    assert response.status_code == 404

def test_get_by_codeword_missing(client):
    response = client.get("/actions/codeword/")
    assert response.status_code == 404

def test_get_by_actionid(client):
    response = client.get("/actions/action/alert")
    assert response.status_code == 200
    assert b'{"codeword":5001,"id":"alert"}' in response.data

def test_get_by_actionid_notfound(client):
    response = client.get("/actions/action/abc")
    assert response.status_code == 404