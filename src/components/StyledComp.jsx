import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
    ${tw`container mx-auto`}
`;

const ShowText = styled.h1`
    ${tw`text-5xl text-center mx-auto mt-2`}
`;

export const NoImg = styled(ShowText)`
    ${tw`text-5xl`}
`;

export const LoadingText = styled(ShowText)`
    ${tw`text-6xl`}
`;

export const Card = styled.div`
    @media (max-width: 700px) {
        ${tw`grid grid-cols-1 gap-4`}
    }
    ${tw`grid grid-cols-3 gap-4`}
`;

export const InsideCard = styled.div`
    ${tw`max-w-sm rounded overflow-hidden shadow-lg mx-auto`}
`;

export const PaddedDiv = styled.div`
    ${tw`px-6 py-4`}
`;

export const User = styled.div`
    ${tw`font-bold text-purple-500 text-xl mb-2`}
`;

export const Tags = styled.span`
    ${tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2`}
`;

export const SearchContainer = styled.div`
    ${tw`max-w-sm rounded overflow-hidden my-10 mx-auto`}
`;

export const InputForm = styled.form`
    ${tw`w-full max-w-sm`}
`;

export const InputDiv = styled.div`
    ${tw`flex items-center border-b-2 border-purple-500 py-2`}
`;

export const InputField = styled.input`
    ${tw`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
`;

export const Button = styled.button`
    ${tw`flex-shrink-0 rounded-lg bg-purple-500 hover:bg-purple-700 text-sm border-4 text-white py-1 px-2`}
`;
