$(document).ready(function () {
    $('#addForm').bind('submit', function(e) {
        $('#todoList').append(
                '<li>' + 
                  '<form class="editDeleteForm">' +
                    '<span aria-live="rude"' + 
                         ' aria-relevant="text"' + 
                         ' class="todo">' + 
                       $('#addInput').val() + '</span>' +
                    '<input type="text" value="' + $('#addInput').val() + '"' + 
                                      ' style="display: none;"' + 
                                      ' class="editInput" />' +
                    '<input type="button" value="修正" class="editButton" />' +
                    '<input type="button" value="削除" class="deleteButton" />' +
                  '</form>' + 
                '</li>');
        $('#addInput').val('');

        $('.editButton').bind('click', function(e) {
            var editButton = $(e.target);
            var form       = $(editButton.parent().get(0));
            var editInput  = form.find(".editInput");
            var todo       = form.find(".todo");
            todo.hide();
            editButton.hide();
            editInput.show();
            editInput.focus();
        });
        $('.deleteButton').bind('click', function(e) {        
            var deleteButton = $(e.target);
            var li           = $(deleteButton.parent().parent().get(0));
            li.remove();
        });
        $('.editDeleteForm').bind('submit', function(e) {
            var form       = $(e.target);
            var editInput  = form.find(".editInput");
            var todo       = form.find(".todo");
            var editButton = form.find(".editButton");
            todo.text(editInput.val());
            todo.show();
            editInput.hide();
            editButton.show();
            return false;
        });

        return false;
    });
});
