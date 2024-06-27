import pytest
from index import app as api

@pytest.fixture()
def client():
    return api.test_client()

def test_get_all(client):
    response = client.get("/actions")
    assert response.status_code == 200
    assert b'{"actions":[{"codeword":5001,"id":"alert"},{"codeword":5002,"id":"thanks"}]}' in response.data