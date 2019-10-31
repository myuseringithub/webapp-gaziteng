"use strict";r.db('webapp').
table('setting').
insert(
[
{
  id: 'dataBlueprint',
  dataBlueprint: {
    template: {
      key: 'XXXXX',
      filePath: 'String',
      insertionPosition: 'Object' },

    view: {
      key: 'XXXXX',
      template: 'String',
      argument: 'Object' },

    valueReturningFile: {
      key: 'XXXXX',
      filePath: 'String',
      type: 'String' },

    condition: {
      key: 'XXXXX',
      valueReturningFile: 'String',
      expectedReturn: 'String' },

    conditionTree: {
      key: 'XXXXX',
      insertionPoint: 'Array',
      callback: 'Object',
      children: 'Array' },

    viewTree: {
      key: 'XXXXX',
      insertionPoint: 'Array',
      children: 'Array' },

    customDatasetSchema: {
      key: 'XXXXX',
      name: 'String',
      blueprint: 'Array' } } }],




{ conflict: 'update' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc291cmNlL2RhdGFiYXNlRGF0YS9kZXByZWNhdGVkL2RhdGFCbHVlcHJpbnQuanMiXSwibmFtZXMiOlsiciIsImRiIiwidGFibGUiLCJpbnNlcnQiLCJpZCIsImRhdGFCbHVlcHJpbnQiLCJ0ZW1wbGF0ZSIsImtleSIsImZpbGVQYXRoIiwiaW5zZXJ0aW9uUG9zaXRpb24iLCJ2aWV3IiwiYXJndW1lbnQiLCJ2YWx1ZVJldHVybmluZ0ZpbGUiLCJ0eXBlIiwiY29uZGl0aW9uIiwiZXhwZWN0ZWRSZXR1cm4iLCJjb25kaXRpb25UcmVlIiwiaW5zZXJ0aW9uUG9pbnQiLCJjYWxsYmFjayIsImNoaWxkcmVuIiwidmlld1RyZWUiLCJjdXN0b21EYXRhc2V0U2NoZW1hIiwibmFtZSIsImJsdWVwcmludCIsImNvbmZsaWN0Il0sIm1hcHBpbmdzIjoiYUFBQUEsQ0FBQyxDQUFDQyxFQUFGLENBQUssUUFBTDtBQUNHQyxLQURILENBQ1MsU0FEVDtBQUVHQyxNQUZIO0FBR0k7QUFDRTtBQUNFQyxFQUFBQSxFQUFFLEVBQUUsZUFETjtBQUVFQyxFQUFBQSxhQUFhLEVBQUU7QUFDYkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLEdBQUcsRUFBRSxPQURHO0FBRVJDLE1BQUFBLFFBQVEsRUFBRSxRQUZGO0FBR1JDLE1BQUFBLGlCQUFpQixFQUFFLFFBSFgsRUFERzs7QUFNYkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pILE1BQUFBLEdBQUcsRUFBRSxPQUREO0FBRUpELE1BQUFBLFFBQVEsRUFBRSxRQUZOO0FBR0pLLE1BQUFBLFFBQVEsRUFBRSxRQUhOLEVBTk87O0FBV2JDLElBQUFBLGtCQUFrQixFQUFFO0FBQ2xCTCxNQUFBQSxHQUFHLEVBQUUsT0FEYTtBQUVsQkMsTUFBQUEsUUFBUSxFQUFFLFFBRlE7QUFHbEJLLE1BQUFBLElBQUksRUFBRSxRQUhZLEVBWFA7O0FBZ0JiQyxJQUFBQSxTQUFTLEVBQUU7QUFDVFAsTUFBQUEsR0FBRyxFQUFFLE9BREk7QUFFVEssTUFBQUEsa0JBQWtCLEVBQUUsUUFGWDtBQUdURyxNQUFBQSxjQUFjLEVBQUUsUUFIUCxFQWhCRTs7QUFxQmJDLElBQUFBLGFBQWEsRUFBRTtBQUNiVCxNQUFBQSxHQUFHLEVBQUUsT0FEUTtBQUViVSxNQUFBQSxjQUFjLEVBQUUsT0FGSDtBQUdiQyxNQUFBQSxRQUFRLEVBQUUsUUFIRztBQUliQyxNQUFBQSxRQUFRLEVBQUUsT0FKRyxFQXJCRjs7QUEyQmJDLElBQUFBLFFBQVEsRUFBRTtBQUNSYixNQUFBQSxHQUFHLEVBQUUsT0FERztBQUVSVSxNQUFBQSxjQUFjLEVBQUUsT0FGUjtBQUdSRSxNQUFBQSxRQUFRLEVBQUUsT0FIRixFQTNCRzs7QUFnQ2JFLElBQUFBLG1CQUFtQixFQUFFO0FBQ25CZCxNQUFBQSxHQUFHLEVBQUUsT0FEYztBQUVuQmUsTUFBQUEsSUFBSSxFQUFFLFFBRmE7QUFHbkJDLE1BQUFBLFNBQVMsRUFBRSxPQUhRLEVBaENSLEVBRmpCLEVBREYsQ0FISjs7Ozs7QUE4Q0ksRUFBRUMsUUFBUSxFQUFFLFFBQVosRUE5Q0oiLCJzb3VyY2VzQ29udGVudCI6WyJyLmRiKCd3ZWJhcHAnKVxuICAudGFibGUoJ3NldHRpbmcnKVxuICAuaW5zZXJ0KFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdkYXRhQmx1ZXByaW50JyxcbiAgICAgICAgZGF0YUJsdWVwcmludDoge1xuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBrZXk6ICdYWFhYWCcsIC8vIGtleVxuICAgICAgICAgICAgZmlsZVBhdGg6ICdTdHJpbmcnLFxuICAgICAgICAgICAgaW5zZXJ0aW9uUG9zaXRpb246ICdPYmplY3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlldzoge1xuICAgICAgICAgICAga2V5OiAnWFhYWFgnLCAvLyBrZXlcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnU3RyaW5nJywgLy8ga2V5XG4gICAgICAgICAgICBhcmd1bWVudDogJ09iamVjdCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZVJldHVybmluZ0ZpbGU6IHtcbiAgICAgICAgICAgIGtleTogJ1hYWFhYJywgLy8ga2V5XG4gICAgICAgICAgICBmaWxlUGF0aDogJ1N0cmluZycsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAga2V5OiAnWFhYWFgnLCAvL2tleVxuICAgICAgICAgICAgdmFsdWVSZXR1cm5pbmdGaWxlOiAnU3RyaW5nJywgLy9rZXlcbiAgICAgICAgICAgIGV4cGVjdGVkUmV0dXJuOiAnU3RyaW5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbmRpdGlvblRyZWU6IHtcbiAgICAgICAgICAgIGtleTogJ1hYWFhYJywgLy9rZXlcbiAgICAgICAgICAgIGluc2VydGlvblBvaW50OiAnQXJyYXknLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICdPYmplY3QnLFxuICAgICAgICAgICAgY2hpbGRyZW46ICdBcnJheScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aWV3VHJlZToge1xuICAgICAgICAgICAga2V5OiAnWFhYWFgnLCAvL2tleVxuICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQ6ICdBcnJheScsXG4gICAgICAgICAgICBjaGlsZHJlbjogJ0FycmF5JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1c3RvbURhdGFzZXRTY2hlbWE6IHtcbiAgICAgICAgICAgIGtleTogJ1hYWFhYJyxcbiAgICAgICAgICAgIG5hbWU6ICdTdHJpbmcnLFxuICAgICAgICAgICAgYmx1ZXByaW50OiAnQXJyYXknLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgeyBjb25mbGljdDogJ3VwZGF0ZScgfSxcbiAgKVxuIl19