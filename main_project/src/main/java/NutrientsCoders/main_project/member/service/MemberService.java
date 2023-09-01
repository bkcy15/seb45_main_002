package NutrientsCoders.main_project.member.service;

import NutrientsCoders.main_project.member.dto.MemberDto;
import NutrientsCoders.main_project.member.dto.MemberResponseDto;
import NutrientsCoders.main_project.member.entity.Member;

public interface MemberService {

    Member createMember(Member member) throws Exception;
    Member additionMemberInfo(MemberDto.AddInfo addInfo) throws Exception;
    Boolean checkEmail(String email) throws Exception;
    Boolean login(MemberDto.Login login) throws Exception;

    Member updateMember(Long memberId,MemberDto.Patch memberpatch) throws Exception;
    Member findMember(Long memberId) throws Exception;
    void deleteMember(Long meberId) throws Exception;

    MemberResponseDto.bmi checkBmi(Long memberId);

}
