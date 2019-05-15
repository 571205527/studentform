function getTemplate(data) {
    $("#coreDiv").empty();
    if (data.length > 0) {
        $.each(data, function (i, res) {
            //$("#tb-print").attr('data-index',i); //设置标签属性
            var template = $("#contentDiv").clone();
            console.log(res);
            //1、登记号
            if (res.applyId != '' && res.applyId != undefined) {
                template.find(".applyId").html(res.applyId);
            }else{
                template.find(".applyId").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            }
            //2、学生姓名
            if (res.stuName != null && res.stuName != '' && res.stuName != undefined) {
                template.find("#stuName").html(res.stuName);
            }
            //3、英文姓名
            if (res.enName != null && res.enName != '' && res.enName != undefined) {
                template.find("#enName").html(res.enName);
            }
            //4、学生性别
            if (res.gender != null && res.gender != '' && res.gender != undefined) {
                template.find("#gender").html(res.gender);
            }
            //5、国籍
            if (res.nationality != '' && res.nationality != undefined) {
                template.find("#nationality").html(res.nationality);
            }
            //6、民族
            if (res.nation != null && res.nation != '' && res.nation != undefined) {
                template.find("#nation").html(res.nation);
            }
            //7、学生出生日期
            if (res.stuBirth != null && res.stuBirth != '' && res.stuBirth != undefined) {
                template.find("#stuBirth").html(res.stuBirth);
            }
            //8、身份证件类型
            if (res.identityType != null && res.identityType != '' && res.identityType != undefined) {
                template.find("#identityType").html(res.identityType);
            }
            // 9、证件号码
            if (res.identityNo != '' && res.identityNo != undefined) {
                template.find("#identityNo").html(res.identityNo);
            }
            //10、证件有效期
            if (res.identityValidPeriod != null && res.identityValidPeriod != '' && res.identityValidPeriod != undefined) {
                template.find("#identityValidPeriod").html(res.identityValidPeriod);
            }
            //11、户籍地址
            if (res.householdAddr != null && res.householdAddr != '' && res.householdAddr != undefined) {
                template.find("#householdAddr").html(res.householdAddr);
            }
            //12、学生持上海市居住证类型
            if (res.residenceType != null && res.residenceType != '' && res.residenceType != undefined) {
                template.find("#residenceType").html(res.residenceType);
            }
            //13、居住地址
            if (res.residenceAddr != null && res.residenceAddr != '' && res.residenceAddr != undefined) {
                template.find("#residenceAddr").html(res.residenceAddr);
            }
            //14、常用邮箱
            if (res.commonMail != null && res.commonMail != '' && res.commonMail != undefined) {
                template.find("#commonMail").html(res.commonMail);
            }
            //15、信件地址
            if (res.letterAddr != null && res.letterAddr != '' && res.letterAddr != undefined) {
                template.find("#letterAddr").html(res.letterAddr);
            }
            //16、邮编
            if (res.zipCode != null && res.zipCode != '' && res.zipCode != undefined) {
                template.find("#zipCode").html(res.zipCode);
            }
            //17、幼儿园名称、地址、电话
            if (res.kindergardenDesc != null && res.kindergardenDesc != '' && res.kindergardenDesc != undefined) {
                template.find("#kindergardenDesc").html(res.kindergardenDesc);
            }
            //18、是否有健康说明
            if (res.isHealth != null && res.isHealth != '' && res.isHealth != undefined) {
                template.find("#isHealth").html(res.isHealth);
            }
            //19、健康说明
            if (res.healthRemark != null && res.healthRemark != '' && res.healthRemark != undefined) {
                template.find("#healthRemark").html(res.healthRemark);
            }
            //20、是否有其他说明
            if (res.isSpecial != null && res.isSpecial != '' && res.isSpecial != undefined) {
                template.find("#isSpecial").html(res.isSpecial);
            }
            //21、其他说明
            if (res.specialRemark != null && res.specialRemark != '' && res.specialRemark != undefined) {
                template.find("#specialRemark").html(res.specialRemark);
            }
            //22、是否独生子女
            if (res.isOneChild != null && res.isOneChild != '' && res.isOneChild != undefined) {
                template.find("#isOneChild").html(res.isOneChild);
            }
            //23、家中几个孩子
            if (res.childNum != null && res.childNum != '' && res.childNum != undefined) {
                template.find("#childNum").html(res.childNum);
            }
            //24、家中排行
            if (res.childOrder != null && res.childOrder != '' && res.childOrder != undefined) {
                template.find("#childOrder").html(res.childOrder);
            }
            //25、兄弟姐妹1 姓名
            if (res.child1Name != null && res.child1Name != '' && res.child1Name != undefined) {
                template.find("#child1Name").html(res.child1Name);
            }
            //26、兄弟姐妹1 出生日期
            if (res.child1Birth != null && res.child1Birth != '' && res.child1Birth != undefined) {
                template.find("#child1Birth").html(res.child1Birth);
            }
            //27、兄弟姐妹1 就读学校
            if (res.child1School != null && res.child1School != '' && res.child1School != undefined) {
                template.find("#child1School").html(res.child1School);
            }
            //28、兄弟姐妹2 姓名
            if (res.child2Name != null && res.child2Name != '' && res.child2Name != undefined) {
                template.find("#child2Name").html(res.child2Name);
            }
            //29、兄弟姐妹2 出生日期
            if (res.child2Birth != null && res.child2Birth != '' && res.child2Birth != undefined) {
                template.find("#child2Birth").html(res.child2Birth);
            }
            //30、兄弟姐妹2 就读学校
            if (res.child2School != null && res.child2School != '' && res.child2School != undefined) {
                template.find("#child2School").html(res.child2School);
            }
            //31、学生图片
            if (res.stuIcon != null && res.stuIcon != '' && res.stuIcon != undefined) {
                template.find("#stuIcon").html("<img src='" + res.stuIcon + "' width='81px' height='113px'/>");
            }
            //32、学生父亲
            if (res.stuFather != '' && res.stuFather != undefined) {
                template.find("#stuFather").html(res.stuFather);
            }
            //33、父亲出生年月
            if (res.faBirth != null && res.faBirth != '' && res.faBirth != undefined) {
                template.find("#faBirth").html(res.faBirth);
            }
            //34、父亲工作单位
            if (res.faWorkDepart != null && res.faWorkDepart != '' && res.faWorkDepart != undefined) {
                template.find("#faWorkDepart").html(res.faWorkDepart);
            }
            //35、父亲单位是否在张江园区
            if (res.faWorkZj != '' && res.faWorkZj != undefined) {
                template.find("#faWorkZj").html(res.faWorkZj);
            }
            //36、父亲职务
            if (res.faPosition != null && res.faPosition != '' && res.faPosition != undefined) {
                template.find("#faPosition").html(res.faPosition);
            }
            //37、父亲最高学历
            if (res.faHighEdu != null && res.faHighEdu != '' && res.faHighEdu != undefined) {
                template.find("#faHighEdu").html(res.faHighEdu);
            }
            //38、父亲毕业院校
            if (res.faGraduated != null && res.faGraduated != '' && res.faGraduated != undefined) {
                template.find("#faGraduated").html(res.faGraduated);
            }
            //39、父亲手机
            if (res.faTel != '' && res.faTel != undefined) {
                template.find("#faTel").html(res.faTel);
            }
            //40、父亲邮箱
            if (res.faMail != null && res.faMail != '' && res.faMail != undefined) {
                template.find("#faMail").html(res.faMail);
            }
            //41、父亲微信
            if (res.faWechat != null && res.faWechat != '' && res.faWechat != undefined) {
                template.find("#faWechat").html(res.faWechat);
            }
            //42、学生母亲
            if (res.stuMother != '' && res.stuMother != undefined) {
                template.find("#stuMother").html(res.stuMother);
            }
            //43、母亲出生年月
            if (res.moBirth != null && res.moBirth != '' && res.moBirth != undefined) {
                template.find("#moBirth").html(res.moBirth);
            }
            //44、母亲工作单位
            if (res.moWorkDepart != null && res.moWorkDepart != '' && res.moWorkDepart != undefined) {
                template.find("#moWorkDepart").html(res.moWorkDepart);
            }
            //45、母亲单位是否在张江园区
            if (res.moWorkZj != '' && res.moWorkZj != undefined) {
                template.find("#moWorkZj").html(res.moWorkZj);
            }
            //46、母亲职务
            if (res.moPosition != null && res.moPosition != '' && res.moPosition != undefined) {
                template.find("#moPosition").html(res.moPosition);
            }
            //47、母亲最高学历
            if (res.moHighEdu != null && res.moHighEdu != '' && res.moHighEdu != undefined) {
                template.find("#moHighEdu").html(res.moHighEdu);
            }
            //48、母亲毕业院校
            if (res.moGraduated != null && res.moGraduated != '' && res.moGraduated != undefined) {
                template.find("#moGraduated").html(res.moGraduated);
            }
            //49、母亲手机
            if (res.moTel != '' && res.moTel != undefined) {
                template.find("#moTel").html(res.moTel);
            }
            //50、母亲邮箱
            if (res.moMail != null && res.moMail != '' && res.moMail != undefined) {
                template.find("#moMail").html(res.moMail);
            }
            //51、母亲微信
            if (res.moWechat != null && res.moWechat != '' && res.moWechat != undefined) {
                template.find("#moWechat").html(res.moWechat);
            }
            //52、和谁居住
            if (res.liveWith != null && res.liveWith != '' && res.liveWith != undefined) {
                template.find("#liveWith").html(res.liveWith);
            }
            //53、其他监护人
            if (res.otherGuardian != null && res.otherGuardian != '' && res.otherGuardian != undefined) {
                template.find("#otherGuardian").html(res.otherGuardian);
            }else{
                template.find("#otherGuardian").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            }
            //54、监护人性别
            if (res.otherGender != null && res.otherGender != '' && res.otherGender != undefined) {
                template.find("#otherGender").html(res.otherGender);
            }else{
                template.find("#otherGender").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            }
            //55、监护人年龄
            if (res.otherAge != null && res.otherAge != '' && res.otherAge != undefined) {
                template.find("#otherAge").html(res.otherAge);
            }/*else{
                template.find("#otherAge").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            }*/
            //56、监护人关系
            if (res.otherRelative != null && res.otherRelative != '' && res.otherRelative != undefined) {
                template.find("#otherRelative").html(res.otherRelative);
            }else{
                template.find("#otherRelative").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
            }
            //57、监护人电话
            if (res.otherTel != null && res.otherTel != '' && res.otherTel != undefined) {
                template.find("#otherTel").html(res.otherTel);
            }
            //58、了解途径
            if (res.knowWay != null && res.knowWay != '' && res.knowWay != undefined) {
                template.find("#knowWay").html(res.knowWay);
            }

            template.show();
            template.find("#detail-panel").show();
            var html = template.html().replace(new RegExp('undefined', 'gm'), '')
            $("#coreDiv").append(html);
        })
    } else {
        var noData = $("#contentDiv").clone();
        noData.html("<p style='text-align: center;font-size: larger;margin-top: 30%;'>查无此人！</p>")
        var html = noData.html().replace(new RegExp('undefined', 'gm'), '')
        $("#coreDiv").append(html);
    }
}

function getPages(data) {
    $("#li-pages").empty();
    var temp1 = $("#div-pages").clone();
    temp1.find("#lastPage").html(data.totalPageCount);
    temp1.find("#currentPage").html(data.currentPage);
    temp1.show();
    var temp = $("#li-pages").clone();
    $("#li-pages").append(temp1);
}