import Note from './Note';

let sampleNotes = [
    {
        title: 'Lorem Ipsum1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis volutpat efficitur. In hac habitasse platea dictumst. Maecenas tempor porttitor leo, porta vehicula neque aliquet at. Nunc et justo consectetur, imperdiet lacus in, dictum odio. Nam ante ipsum, eleifend quis vestibulum ut, eleifend sed nunc. Sed ac nulla magna. Aenean eget pretium felis. Etiam ante nibh, consectetur non purus quis, congue dignissim arcu. Donec aliquam id nibh ultricies lobortis. Fusce ultricies elit quis iaculis posuere. Proin aliquam laoreet diam, vitae porta lectus sagittis ac.'
    },
    {
        title: 'Lorem Ipsum1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis volutpat efficitur. In hac habitasse platea dictumst. Maecenas tempor porttitor leo, porta vehicula neque aliquet at. Nunc et justo consectetur, imperdiet lacus in, dictum odio. Nam ante ipsum, eleifend quis vestibulum ut, eleifend sed nunc. Sed ac nulla magna. Aenean eget pretium felis. Etiam ante nibh, consectetur non purus quis, congue dignissim arcu. Donec aliquam id nibh ultricies lobortis. Fusce ultricies elit quis iaculis posuere. Proin aliquam laoreet diam, vitae porta lectus sagittis ac.'
    },
    {
        title: 'Lorem Ipsum1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis volutpat efficitur. In hac habitasse platea dictumst. Maecenas tempor porttitor leo, porta vehicula neque aliquet at. Nunc et justo consectetur, imperdiet lacus in, dictum odio. Nam ante ipsum, eleifend quis vestibulum ut, eleifend sed nunc. Sed ac nulla magna. Aenean eget pretium felis. Etiam ante nibh, consectetur non purus quis, congue dignissim arcu. Donec aliquam id nibh ultricies lobortis. Fusce ultricies elit quis iaculis posuere. Proin aliquam laoreet diam, vitae porta lectus sagittis ac.'
    },
    {
        title: 'Lorem Ipsum1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis volutpat efficitur. In hac habitasse platea dictumst. Maecenas tempor porttitor leo, porta vehicula neque aliquet at. Nunc et justo consectetur, imperdiet lacus in, dictum odio. Nam ante ipsum, eleifend quis vestibulum ut, eleifend sed nunc. Sed ac nulla magna. Aenean eget pretium felis. Etiam ante nibh, consectetur non purus quis, congue dignissim arcu. Donec aliquam id nibh ultricies lobortis. Fusce ultricies elit quis iaculis posuere. Proin aliquam laoreet diam, vitae porta lectus sagittis ac.'
    },
    {
        title: 'Lorem Ipsum1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis volutpat efficitur. In hac habitasse platea dictumst. Maecenas tempor porttitor leo, porta vehicula neque aliquet at. Nunc et justo consectetur, imperdiet lacus in, dictum odio. Nam ante ipsum, eleifend quis vestibulum ut, eleifend sed nunc. Sed ac nulla magna. Aenean eget pretium felis. Etiam ante nibh, consectetur non purus quis, congue dignissim arcu. Donec aliquam id nibh ultricies lobortis. Fusce ultricies elit quis iaculis posuere. Proin aliquam laoreet diam, vitae porta lectus sagittis ac.'
    }
]

const Notes = () => {
    return (
        <div>
            hello
            {sampleNotes.map((note, index) => {
                console.log(note);
                return (
                    <div>
                        <Note title={note.title} body={note.body} key={index}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Notes;