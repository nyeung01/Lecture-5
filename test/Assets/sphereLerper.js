#pragma strict

function Start () {

}

function Update () {
	if(Input.anyKeyDown)
		MoveOver();
}

function MoveOver () {
	var t : float = 0;
	while(t<1){
		// startPoint * (1-t) + endPoint * t
		transform.position = Vector3.Lerp(Vector3(-5,0,0), Vector3(5,0,0),t);
		//transform.position = startPoint * (1-Mathf.Pow(t,2)) + endPoint *
		t += 0.1*Time.deltaTime;
		yield;
	}
}