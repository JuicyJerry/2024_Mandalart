function downloadPageAsImage() {
    document.querySelectorAll("input, textarea").forEach(function(element) {
        if (!element.value) { // 요소가 비어 있으면
          element.dataset.originalPlaceholder = element.placeholder; // 원래 placeholder 백업
          element.placeholder = ''; // placeholder를 비움
          element.value = element.dataset.originalPlaceholder; // placeholder 텍스트를 value로 설정
        }
    });
      
    // html2canvas 실행 코드...
    html2canvas(document.body).then(function(canvas) {
        // canvas를 이미지로 변환
        var image = canvas.toDataURL("image/png");

        // 이미지 다운로드를 위한 링크 생성
        var aDownloadLink = document.createElement('a');
        aDownloadLink.href = image;
        aDownloadLink.download = 'page-snapshot.png';

        // 링크 클릭 이벤트 트리거
        document.body.appendChild(aDownloadLink);
        aDownloadLink.click();
        document.body.removeChild(aDownloadLink);
    });

    // 스냅샷 캡처 후 원래대로 복원
    document.querySelectorAll("input, textarea").forEach(function(element) {
    if (element.dataset.originalPlaceholder) {
        element.value = ''; // value를 비움
        element.placeholder = element.dataset.originalPlaceholder; // 원래 placeholder로 복원
        delete element.dataset.originalPlaceholder; // 백업 데이터 삭제
    }
    });
}

function handleMainTable() {
    let mainTable = document.querySelectorAll('table .textarea-final'); 
    mainTable.forEach((el) => {
        let text = el.value;
        if (text.length > 0) {
            if (el.classList.contains('first')) {
                const firstTable = document.querySelector('table.table-wrap.disabled.first');
                if (firstTable && firstTable.classList.contains('disabled')) {
                    firstTable.classList.remove('disabled');
                    const firstTableCells = document.querySelectorAll('table.table-wrap.first textarea');
                    
                    if (firstTableCells) {
                        firstTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let firstTableRow = document.querySelector('.textarea-1.main'); 
                firstTableRow.value = el.value;
            } else if (el.classList.contains('second')) {
                const secondTable = document.querySelector('table.table-wrap.disabled.second');
                if (secondTable && secondTable.classList.contains('disabled')) {
                    secondTable.classList.remove('disabled');
                    const secondTableCells = document.querySelectorAll('table.table-wrap.second textarea');
                    
                    if (secondTableCells) {
                        secondTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let secondTableRow = document.querySelector('.textarea-2.main'); 
                secondTableRow.value = el.value;
            } else if (el.classList.contains('third')) {
                const thirdTable = document.querySelector('table.table-wrap.disabled.third');
                if (thirdTable && thirdTable.classList.contains('disabled')) {
                    thirdTable.classList.remove('disabled');
                    const thirdTableCells = document.querySelectorAll('table.table-wrap.third textarea');
                    
                    if (thirdTableCells) {
                        thirdTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let thirdTableRow = document.querySelector('.textarea-3.main'); 
                thirdTableRow.value = el.value;
            } else if (el.classList.contains('fourth')) {
                const fourthTable = document.querySelector('table.table-wrap.disabled.fourth');
                if (fourthTable && fourthTable.classList.contains('disabled')) {
                    fourthTable.classList.remove('disabled');
                    const fourthTableCells = document.querySelectorAll('table.table-wrap.fourth textarea');
                    
                    if (fourthTableCells) {
                        fourthTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let fourthTableRow = document.querySelector('.textarea-4.main'); 
                fourthTableRow.value = el.value;
            } else if (el.classList.contains('fifth')) {
                const fifthTable = document.querySelector('table.table-wrap.disabled.fifth');
                if (fifthTable && fifthTable.classList.contains('disabled')) {
                    fifthTable.classList.remove('disabled');
                    const fifthTableCells = document.querySelectorAll('table.table-wrap.fifth textarea');
                    
                    if (fifthTableCells) {
                        fifthTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let fifthTableRow = document.querySelector('.textarea-5.main'); 
                fifthTableRow.value = el.value;
            } else if (el.classList.contains('sixth')) {
                const sixthTable = document.querySelector('table.table-wrap.disabled.sixth');
                if (sixthTable && sixthTable.classList.contains('disabled')) {
                    sixthTable.classList.remove('disabled');
                    const sixthTableCells = document.querySelectorAll('table.table-wrap.sixth textarea');
                    
                    if (sixthTableCells) {
                        sixthTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let sixthTableRow = document.querySelector('.textarea-6.main'); 
                sixthTableRow.value = el.value;
            } else if (el.classList.contains('seventh')) {
                const seventhTable = document.querySelector('table.table-wrap.disabled.seventh');
                if (seventhTable && seventhTable.classList.contains('disabled')) {
                    seventhTable.classList.remove('disabled');
                    const seventhTableCells = document.querySelectorAll('table.table-wrap.seventh textarea');
                    
                    if (seventhTableCells) {
                        seventhTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let seventhTableRow = document.querySelector('.textarea-7.main'); 
                seventhTableRow.value = el.value;
            } else if (el.classList.contains('eighth')) {
                const eighthTable = document.querySelector('table.table-wrap.disabled.eighth');
                if (eighthTable && eighthTable.classList.contains('disabled')) {
                    eighthTable.classList.remove('disabled');
                    const eighthTableCells = document.querySelectorAll('table.table-wrap.eighth textarea');
                    
                    if (eighthTableCells) {
                        eighthTableCells.forEach((el) => {
                            if (!el.classList.contains('main')) {
                                el.removeAttribute('disabled');
                            }
                        })
                    }
                }
                let eighthTableRow = document.querySelector('.textarea-8.main'); 
                eighthTableRow.value = el.value;
            }
        } else {
            if (el.classList.contains('first')) {
                const firstTable = document.querySelector('table.table-wrap.first');
                firstTable.classList.add('disabled');
                const firstTableRow = document.querySelector('.textarea-1.main');
                firstTableRow.value = '';
            } else if (el.classList.contains('second')) {
                const secondTable = document.querySelector('table.table-wrap.second');
                secondTable.classList.add('disabled');
                const secondTableRow = document.querySelector('.textarea-2.main');
                secondTableRow.value = '';
            } else if (el.classList.contains('third')) {
                const thirdTable = document.querySelector('table.table-wrap.third');
                thirdTable.classList.add('disabled');
                const thirdTableRow = document.querySelector('.textarea-3.main');
                thirdTableRow.value = '';
            } else if (el.classList.contains('fourth')) {
                const fourthTable = document.querySelector('table.table-wrap.fourth');
                fourthTable.classList.add('disabled');
                const fourthTableRow = document.querySelector('.textarea-4.main');
                fourthTableRow.value = '';
            } else if (el.classList.contains('fifth')) {
                const fifthTable = document.querySelector('table.table-wrap.fifth');
                fifthTable.classList.add('disabled');
                const fifthTableRow = document.querySelector('.textarea-5.main');
                fifthTableRow.value = '';
            } else if (el.classList.contains('sixth')) {
                const sixthTable = document.querySelector('table.table-wrap.sixth');
                sixthTable.classList.add('disabled');
                const sixthTableRow = document.querySelector('.textarea-6.main');
                sixthTableRow.value = '';
            } else if (el.classList.contains('seventh')) {
                const seventhTable = document.querySelector('table.table-wrap.seventh');
                seventhTable.classList.add('disabled');
                const seventhTableRow = document.querySelector('.textarea-7.main');
                seventhTableRow.value = '';
            } else if (el.classList.contains('eighth')) {
                const eighthTable = document.querySelector('table.table-wrap.eighth');
                eighthTable.classList.add('disabled');
                const eighthTableRow = document.querySelector('.textarea-8.main');
                eighthTableRow.value = '';
            }
        }
    });
}

function setCustomStyle() {
    let disabledTable = document.querySelectorAll('table.disabled textarea'); 
    disabledTable.forEach((el) => {
        el.disabled = true;
    });
}

function main() {
    setCustomStyle();
}

main();