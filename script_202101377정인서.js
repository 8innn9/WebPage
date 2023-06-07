function colorChange(obj) {
	var pArray = document.getElementsByTagName("p");

	for(var i = 0; i < pArray.length; i++) {
		pArray[i].style.color = obj.value;
	}
}

function change(num) {
	var name = document.getElementById("name");
	var content = document.getElementById("content");
	var string;

	if(num == 1) {
		name.innerHTML = "#금융";
		string = "은행에서는 데이터베이스를 사용하여 잔액 조회부터 계좌이체까지 모든 고객 <span title = '하나의 작업을 수행하기 위해 필요한 데이터베이스의 연산들을 모아놓은 것' style = 'border-bottom: 2px dashed #EDF1D6'>트랜잭션</span>을 추적한다. 이 트랜잭션은 즉시 수행되어야 하며 대량의 트랜잭션 데이터는 항상 최신 상태를 유지해야 한다. 이를 위해 은행에서는 다수의 고객, 트랜잭션의 빈번한 데이터 변경, 빠른 응답 시간을 처리할 수 있는 <span title = '키(key)와 값(value)을 테이블 형태로 구성한 데이터베이스' style = 'border-bottom: 2px dashed #EDF1D6'>관계형 데이터베이스</span>를 사용한다."; 
	} else if(num == 2) {
		name.innerHTML = "#전자상거래";
		string = "전자상거래 웹사이트가 있는 경우, 카탈로그에는 각각 다양한 특성이 있는 개별 제품이 포함된다. 문서 중심 데이터베이스(<span title = '표(table) 형식을 사용하지 않는 데이터베이스' style = 'border-bottom: 2px dashed #EDF1D6'>비관계형 데이터베이스</span>)는 개별 문서를 사용하여 단일 제품의 모든 특성을 설명해 다름 제품에 영향을 주지 않고 문서의 특성을 변경할 수 있다. 메모리 내 데이터베이스는 일반적으로 재고 및 가격과 같이 자주 액세스하는 전자상거래 데이터를 캐시하는 데 사용되어 데이터 검색 속도를 높이고 데이터베이스에 대한 부하를 줄인다.";

	} else if(num == 3) {
		name.innerHTML = "#소셜 네트워크";
		string = "소셜 네트워크에 가입하면 해당 네트워크를 사용하는 모든 사용자의 <span title = '표(table) 형식을 사용하지 않는 데이터베이스' style = 'border-bottom: 2px dashed #EDF1D6'>비관계형 데이터베이스</span>에 사용자의 정보가 포함된다. 해당 네트워크의 다른 사용자와 연결되면 사용자는 소셜 그래프의 일부가 된다.친구와 인맥이 있는 새로운 사용자를 검색할 수 있는 건 이 때문이다.";

	} else {
		name.innerHTML = "#분석";
		string = "조직이 자체 데이터에서 인사이트를 얻으려는 경우  <span title = '키(key)와 값(value)을 테이블 형태로 구성한 데이터베이스' style = 'border-bottom: 2px dashed #EDF1D6'>관계형 데이터베이스</span>는 분석을 관리하는 데 도움이 된다. 예를 들어 기술 지원 센터는 문제 유형, 문제 해결 시간, 고객 만족도를 비롯한 다양한 차원에서 고객 문제를 추적할 수 있다. 또한 다차원 분석이 가능하여 많은 양의 데이터를 고속으로 처리할 수 있다.";

	}
	content.innerHTML = string;
}

function reload() {
	window.location.reload(true);
}
